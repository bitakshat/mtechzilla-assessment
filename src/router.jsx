import { createBrowserRouter, Route, Link } from "react-router-dom"
import { App } from "./App"
import Card from "./components/GithubUserUi/Card"
import UserInfo from "./components/GithubUserUi/UserInfo"
import Login from "./components/PomodoroTimer/Login"
import Timer from "./components/PomodoroTimer/Timer"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "githubuserui",
        element: <Card />
    },
    {
        path: "userinfo",
        element: <UserInfo />,
    },
    {
        path: "pomodorologin",
        element: <Login />,
    },
    {
        path: "pomodorotimer",
        element: <Timer />,
    },
])

