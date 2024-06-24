import { useEffect, useState } from "react";
import { useNavigationHook } from "../../Hooks/useNavigationHook";

export const useSplashHook = () => {
    const { reset } = useNavigationHook();
    const [splashLoading, setSplashLoading] = useState(true);

    const completeLoading = () => {
        setTimeout(() => {
            setSplashLoading(false);
            reset('Home');
        }, 2000);
    };

    useEffect(() => {
        completeLoading();
    }, []);

    return {
        splashLoading
    };
};