import React from 'react';
const AddressMap = () => {
    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5425047743142!2d73.7910512147227!3d18.594653271757778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91f94e23a5f%3A0xa908235cade41c09!2sVision%209%20Mall%2C%20Pimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1676114138018!5m2!1sen!2sin"
                width="2000"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen="yes"
                aria-hidden="false"
                tabindex="0"
            ></iframe>

        </div>
    );
}
export { AddressMap }