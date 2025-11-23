'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        dob: ''
    });
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [loading, setLoading] = useState(false);

    const handlePhoneInput = (e) => {
        let digits = e.target.value.replace(/\D/g, '');
        digits = digits.substring(0, 10);

        let formatted = '';
        if (digits.length > 0) {
            formatted = '(' + digits.substring(0, 3);
        }
        if (digits.length >= 4) {
            formatted += ') ' + digits.substring(3, 6);
        }
        if (digits.length >= 7) {
            formatted += '-' + digits.substring(6, 10);
        }

        setFormData({ ...formData, phone: formatted });
    };

    const handlePasswordInput = (e) => {
        const password = e.target.value;
        setFormData({ ...formData, password });

        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (password.match(/[a-z]/)) strength += 25;
        if (password.match(/[A-Z]/)) strength += 25;
        if (password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/)) strength += 25;

        setPasswordStrength(strength);
    };

    const getStrengthColor = () => {
        if (passwordStrength <= 25) return '#c00202';
        if (passwordStrength <= 50) return '#ffaa00';
        if (passwordStrength <= 75) return '#058aff';
        return '#014c00';
    };

    const showMessage = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (formData.password !== formData.confirmPassword) {
            showMessage('Passwords do not match. Please try again.', 'error');
            return;
        }

        if (formData.password.length < 8) {
            showMessage('Password must be at least 8 characters long.', 'error');
            return;
        }

        setLoading(true);

        try {
            // Split full name
            const nameParts = formData.fullName.trim().split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(' ') || firstName;

            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone.replace(/\D/g, ''),
                    password: formData.password,
                    dob: formData.dob
                })
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (err) {
                data = { error: text };
            }

            if (response.ok) {
                showMessage(data.message || 'Registration successful! You can now login on the mobile app.', 'success');
                setTimeout(() => {
                    window.location.href="/";
                }, 2000);
            } else {
                showMessage(data.error || 'Registration failed. Please try again.', 'error');
                setLoading(false);
            }
        } catch (error) {
            console.error('Registration error:', error);
            showMessage('Network error. Please check your connection and try again.', 'error');
            setLoading(false);
        }
    };

    return (
        <>
            <div className="page-container">
                <div className="container">
                    <div className="logo">
                        <h1>LumoraClear</h1>
                        <p>Making medical bills simple and transparent</p>
                    </div>

                    <h2>Create Your Account</h2>

                    {message.text && (
                        <div className={`${message.type}-message`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="(555) 123-4567"
                                pattern="^\\(\\d{3}\\)\\s\\d{3}-\\d{4}$"
                                title="Format must be (555) 123-4567"
                                required
                                value={formData.phone}
                                onChange={handlePhoneInput}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder="Create a strong password"
                                value={formData.password}
                                onChange={handlePasswordInput}
                            />
                            <div className="password-strength">
                                <div className="strength-bar">
                                    <div
                                        className="strength-fill"
                                        style={{
                                            width: `${passwordStrength}%`,
                                            background: getStrengthColor()
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                placeholder="Re-enter your password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                style={{width:'100%', display:'flex', padding:'10px', borderRadius:6, border: '2px solid #e0e0e0'}}
                                type="date"
                                id="dob"
                                name="dob"
                                required
                                value={formData.dob}
                                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                            />
                        </div>


                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                        <button
                            type="button"
                            className="btn-primary cancel"
                            onClick={() => window.location.href = "/"}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .page-container {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    background: linear-gradient(-135deg, white 0%, #058aff 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    color: #333;
                    margin: 0;
                    width: 100%;
                }

                .container {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    max-width: 480px;
                    width: 100%;
                    padding: 40px;
                }

                .logo {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .logo h1 {
                    color: #058aff;
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 8px;
                }

                .logo p {
                    color: #666;
                    font-size: 14px;
                }

                h2 {
                    color: #025eaf;
                    font-size: 24px;
                    margin-bottom: 24px;
                    text-align: center;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    margin-bottom: 6px;
                    color: #025eaf;
                    font-size: 14px;
                    font-weight: 500;
                }

                input[type="text"],
                input[type="email"],
                input[type="password"],
                input[type="tel"] {
                    width: 100%;
                    padding: 12px 16px;
                    border: 2px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 15px;
                    transition: all 0.3s ease;
                    background: white;
                    color: #1a1a1a;
                    box-sizing: border-box;
                }

                input[type="text"]:focus,
                input[type="email"]:focus,
                input[type="password"]:focus,
                input[type="tel"]:focus {
                    outline: none;
                    border-color: #058aff;
                    box-shadow: 0 0 0 3px rgba(5, 138, 255, 0.1);
                }

                input::placeholder {
                    color: #999;
                }

                .btn-primary {
                    width: 100%;
                    padding: 14px;
                    background: linear-gradient(135deg, #058aff 0%, #39a1fd 100%);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .btn-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }

                .btn-primary.cancel {
                    margin-top: 10px;
                    background: linear-gradient(135deg, #f3f3f3 0%, #e0e0e0 100%);
                    color: #025eaf;
                }

                .btn-primary:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(5, 138, 255, 0.4);
                }

                .btn-primary.cancel:hover {
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                .btn-primary:active:not(:disabled) {
                    transform: translateY(0);
                }

                .password-strength {
                    margin-top: 8px;
                    font-size: 12px;
                    color: #666;
                }

                .strength-bar {
                    height: 4px;
                    background: #e0e0e0;
                    border-radius: 2px;
                    margin-top: 6px;
                    overflow: hidden;
                }

                .strength-fill {
                    height: 100%;
                    transition: width 0.3s ease, background 0.3s ease;
                }

                .error-message {
                    color: #c00202;
                    background: #c0020216;
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 14px;
                    margin-bottom: 20px;
                    border-left: 3px solid #c00202;
                }

                .success-message {
                    color: #014c00;
                    background: #e8f5e9;
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 14px;
                    margin-bottom: 20px;
                    border-left: 3px solid #014c00;
                }

                @media (max-width: 480px) {
                    .container {
                        padding: 30px 24px;
                    }

                    .logo h1 {
                        font-size: 28px;
                    }

                    h2 {
                        font-size: 20px;
                    }
                }
            `}</style>
        </>
    );
}

export default dynamic(() => Promise.resolve(Register), { ssr: false });
