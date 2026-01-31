import { Suspense } from "react";
import SplashPage from "../../components/SplashPage";

export default function CatchAllPage() {
  return (
    <Suspense fallback={null}>
      <SplashPage />
    </Suspense>
  );
}
