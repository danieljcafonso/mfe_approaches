import * as React from "react";
const Button = React.lazy(() => import('app2/Button'));


const App = () => {
    const [auth, setAuth] = React.useState(null);
    React.useEffect(() => {
        window.sessionStorage.setItem('access_token', 'randomToken')
        setAuth('randomToken')
    }, [])

    return <div>
    <span>App1</span>
    <React.Suspense fallback={<span>loading...</span>}>
        <Button accessToken={auth}/>
    </React.Suspense>
    </div>
}

export default App;