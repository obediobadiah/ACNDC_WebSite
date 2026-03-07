import React, { useState, useEffect } from 'react';
import '../styles/Newsletter.css';
import API_BASE_URL from '../../../../config/api';

function Newsletter({ Toggle }) {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/newsletter-subscribers`);
            if (response.ok) {
                const data = await response.json();
                setSubscribers(data);
            } else {
                throw new Error('Failed to fetch newsletter subscribers');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateSubscriberStatus = async (subscriberId, newStatus) => {
        try {
            const response = await fetch(`${API_BASE_URL}/newsletter-subscribers/${subscriberId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                // Update local state
                setSubscribers(subscribers.map(subscriber => 
                    subscriber.id === subscriberId 
                        ? { ...subscriber, status: newStatus }
                        : subscriber
                ));
                alert('Subscriber status updated successfully');
            } else {
                throw new Error('Failed to update status');
            }
        } catch (err) {
            alert('Error updating subscriber status: ' + err.message);
        }
    };

    const deleteSubscriber = async (subscriberId) => {
        if (window.confirm('Are you sure you want to delete this subscriber?')) {
            try {
                const response = await fetch(`${API_BASE_URL}/newsletter-subscribers/${subscriberId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setSubscribers(subscribers.filter(subscriber => subscriber.id !== subscriberId));
                    alert('Subscriber deleted successfully');
                } else {
                    throw new Error('Failed to delete subscriber');
                }
            } catch (err) {
                alert('Error deleting subscriber: ' + err.message);
            }
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return '#28a745';
            case 'inactive': return '#ffc107';
            case 'unsubscribed': return '#dc3545';
            default: return '#6c757d';
        }
    };

    if (loading) {
        return (
            <div className="newsletter-container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Newsletter Subscribers</h2>
                    <button className="btn btn-light" onClick={Toggle}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="newsletter-container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Newsletter Subscribers</h2>
                    <button className="btn btn-light" onClick={Toggle}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="newsletter-container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Newsletter Subscribers</h2>
                <button className="btn btn-light" onClick={Toggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="newsletter-stats mb-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="stat-card">
                            <h5>Total Subscribers</h5>
                            <h3>{subscribers.length}</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stat-card active">
                            <h5>Active</h5>
                            <h3>{subscribers.filter(s => s.status === 'active').length}</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stat-card inactive">
                            <h5>Inactive</h5>
                            <h3>{subscribers.filter(s => s.status === 'inactive').length}</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stat-card unsubscribed">
                            <h5>Unsubscribed</h5>
                            <h3>{subscribers.filter(s => s.status === 'unsubscribed').length}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsletter-table-container">
                <table className="newsletter-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Subscribed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((subscriber) => (
                            <tr key={subscriber.id}>
                                <td>{subscriber.id}</td>
                                <td>{subscriber.name || 'N/A'}</td>
                                <td>{subscriber.email}</td>
                                <td>
                                    {subscriber.message ? (
                                        <span title={subscriber.message}>
                                            {subscriber.message.length > 50 
                                                ? subscriber.message.substring(0, 50) + '...' 
                                                : subscriber.message
                                            }
                                        </span>
                                    ) : 'N/A'}
                                </td>
                                <td>
                                    <span 
                                        className="status-badge" 
                                        style={{ backgroundColor: getStatusColor(subscriber.status) }}
                                    >
                                        {subscriber.status}
                                    </span>
                                </td>
                                <td>{formatDate(subscriber.created_at)}</td>
                                <td>
                                    <div className="action-buttons">
                                        <select 
                                            value={subscriber.status}
                                            onChange={(e) => updateSubscriberStatus(subscriber.id, e.target.value)}
                                            className="status-select"
                                        >
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                            <option value="unsubscribed">Unsubscribed</option>
                                        </select>
                                        <button 
                                            onClick={() => deleteSubscriber(subscriber.id)}
                                            className="btn btn-sm btn-danger delete-btn"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {subscribers.length === 0 && (
                    <div className="text-center py-4">
                        <p>No newsletter subscribers found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Newsletter;
