import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../../../../config/api'
import '../styles/Donations.css';

function Donations({ Toggle }) {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/donations`);
            if (response.ok) {
                const data = await response.json();
                setDonations(data);
            } else {
                throw new Error('Failed to fetch donations');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateDonationStatus = async (donationId, newStatus) => {
        try {
            const response = await fetch(`${API_BASE_URL}/donations/${donationId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                // Update local state
                setDonations(donations.map(donation => 
                    donation.id === donationId 
                        ? { ...donation, status: newStatus }
                        : donation
                ));
                alert('Donation status updated successfully');
            } else {
                throw new Error('Failed to update status');
            }
        } catch (err) {
            alert('Error updating donation status: ' + err.message);
        }
    };

    const deleteDonation = async (donationId) => {
        if (window.confirm('Are you sure you want to delete this donation?')) {
            try {
                const response = await fetch(`${API_BASE_URL}/donations/${donationId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setDonations(donations.filter(donation => donation.id !== donationId));
                    alert('Donation deleted successfully');
                } else {
                    throw new Error('Failed to delete donation');
                }
            } catch (err) {
                alert('Error deleting donation: ' + err.message);
            }
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return '#ffc107';
            case 'confirmed': return '#28a745';
            case 'completed': return '#007bff';
            case 'cancelled': return '#dc3545';
            default: return '#6c757d';
        }
    };

    if (loading) {
        return (
            <div className="donations-container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Donations</h2>
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
            <div className="donations-container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Donations</h2>
                    <button className="btn btn-light" onClick={Toggle}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="alert alert-danger">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="donations-container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Donations Management</h2>
                <button className="btn btn-light" onClick={Toggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>Organization</th>
                                    <th>Phone</th>
                                    <th>Mode</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Payment Details</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.map((donation) => (
                                    <tr key={donation.id}>
                                        <td>{donation.id}</td>
                                        <td>{donation.name}</td>
                                        <td>{donation.email}</td>
                                        <td>{donation.country || '-'}</td>
                                        <td>{donation.organization || '-'}</td>
                                        <td>{donation.phone || '-'}</td>
                                        <td>
                                            <span className={`badge ${donation.donation_mode === 'monthly' ? 'bg-primary' : 'bg-secondary'}`}>
                                                {donation.donation_mode}
                                            </span>
                                        </td>
                                        <td>${donation.amount}</td>
                                        <td>
                                            <span className={`badge ${donation.payment_method === 'mobile-money' ? 'bg-success' : 'bg-info'}`}>
                                                {donation.payment_method}
                                            </span>
                                        </td>
                                        <td>
                                            <small>{donation.payment_detail}</small>
                                        </td>
                                        <td>
                                            <select 
                                                className="form-select form-select-sm"
                                                value={donation.status}
                                                onChange={(e) => updateDonationStatus(donation.id, e.target.value)}
                                                style={{ 
                                                    backgroundColor: getStatusColor(donation.status),
                                                    color: 'white',
                                                    border: 'none'
                                                }}
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="confirmed">Confirmed</option>
                                                <option value="completed">Completed</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td>{formatDate(donation.created_at)}</td>
                                        <td>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteDonation(donation.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {donations.length === 0 && (
                            <div className="text-center py-4">
                                <p className="text-muted">No donations found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Total Donations</h5>
                            <h3 className="text-primary">{donations.length}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Pending</h5>
                            <h3 className="text-warning">
                                {donations.filter(d => d.status === 'pending').length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Confirmed</h5>
                            <h3 className="text-success">
                                {donations.filter(d => d.status === 'confirmed').length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Total Amount</h5>
                            <h3 className="text-info">
                                ${donations.reduce((sum, d) => sum + parseFloat(d.amount), 0).toFixed(2)}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donations;
