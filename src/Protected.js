import { Navigate } from "react-router";

export default function Protected ({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return children;
}