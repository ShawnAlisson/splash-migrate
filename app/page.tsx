import { Suspense } from "react";
import SplashPage from "../components/SplashPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SplashPage />
    </Suspense>
  );
}
