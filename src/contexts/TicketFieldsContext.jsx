import React, { createContext, useContext, useState } from 'react';

const TicketFieldsContext = createContext();

export function TicketFieldsProvider({ children }) {
    // Initial active tickets
    const [activeTickets, setActiveTickets] = useState([
        {
            name: "AI Intent",
            descriptions: "Topics detected in tickets",
            lastUpdate: "01/20/2025",
        },
        {
            name: "AI Intent 2",
            descriptions: "Topics detected in tickets",
            lastUpdate: "01/20/2025",
        },
        {
            name: "AI Intent 3",
            descriptions: "Topics detected in tickets",
            lastUpdate: "01/20/2025",
        },
        {
            name: "AI Intent 4",
            descriptions: "Topics detected in tickets",
            lastUpdate: "01/20/2025",
        },
        {
            name: "AI Intent 5",
            descriptions: "Topics detected in tickets",
            lastUpdate: "01/20/2025",
        },
        {
            name: "AI Intent 7",
            descriptions: "Topics detected in tickets",
            lastUpdate: "01/20/2025",
        },
    ]);

    const [archivedTickets, setArchivedTickets] = useState([]);

    // Add new ticket field
    const addTicket = (ticket) => {
        const newTicket = {
            ...ticket,
            lastUpdate: new Date().toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'
            })
        };
        setActiveTickets(prev => [...prev, newTicket]);
    };

    // Archive a ticket
    const archiveTicket = (ticket) => {
        setArchivedTickets(prev => [...prev, ticket]);
        setActiveTickets(prev => prev.filter(t => t.name !== ticket.name));
    };

    // Restore archived ticket
    const restoreTicket = (ticket) => {
        setActiveTickets(prev => [...prev, ticket]);
        setArchivedTickets(prev => prev.filter(t => t.name !== ticket.name));
    };

    // Delete ticket permanently
    const deleteTicket = (ticket) => {
        setArchivedTickets(prev => prev.filter(t => t.name !== ticket.name));
    };

    // Update ticket order (for drag & drop)
    const updateActiveTickets = (newOrder) => {
        setActiveTickets(newOrder);
    };

    const updateArchivedTickets = (newOrder) => {
        setArchivedTickets(newOrder);
    };

    return (
        <TicketFieldsContext.Provider value={{
            activeTickets,
            archivedTickets,
            addTicket,
            archiveTicket,
            restoreTicket,
            deleteTicket,
            updateActiveTickets,
            updateArchivedTickets
        }}>
            {children}
        </TicketFieldsContext.Provider>
    );
}

// Custom hook to use the context
export function useTicketFields() {
    const context = useContext(TicketFieldsContext);
    if (!context) {
        throw new Error('useTicketFields must be used within TicketFieldsProvider');
    }
    return context;
}