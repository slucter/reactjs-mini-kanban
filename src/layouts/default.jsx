const { MyRoutes } = require("../routes");

function DefaultLayout () {
    return (
        <div className="wrapper-page">
            <MyRoutes />
        </div>
    )
}

export { DefaultLayout }