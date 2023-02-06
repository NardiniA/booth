import React from "react";

const Subscribe: React.FC<{ footer: {
    title?: string,
    subtitle?: string,
    display?: boolean,
} }> = ({ footer }) => {
    return (
        <div className="row s-footer__top">
            <div className="column lg-12 text-center">
                {footer.title && (
                    <h2 className="text-display-1">{footer.title}</h2>
                )}
                {footer.subtitle && <p className="lead">{footer.subtitle}</p>}
            </div>
        </div>
    );
};

export default Subscribe;
