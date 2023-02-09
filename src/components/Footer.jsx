import React from "react";

export default function() {
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Copywrite © {currentYear}</p>
    </footer>
}