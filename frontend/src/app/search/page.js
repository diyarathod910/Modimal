import { Suspense } from "react";
import SearchPage from "./searchPage";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchPage />
        </Suspense>
    );
}