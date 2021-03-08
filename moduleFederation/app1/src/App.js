import * as React from "react";
const Button = React.lazy(() => import('app2/Button'));

const App = () => {
    return <div>
    <span>App1</span>
    <React.Suspense fallback={<span>loading...</span>}>
        <Button/>
    </React.Suspense>
    </div>
}

export default App;