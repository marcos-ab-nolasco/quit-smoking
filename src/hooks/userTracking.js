export const useTracking = () => {
    const trackLead = () => {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
        }
    };

    const trackPurchase = () => {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Purchase', {value: 27, currency: 'BRL'});
        }
    };

    return { trackLead, trackPurchase };
};
