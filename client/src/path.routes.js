import AboutPage from "./pages/aboutPage";
import { AdminPage } from "./pages/AdminPage";
import { AuthPage } from "./pages/AuthPage";
import { BookmarksPage } from "./pages/BookmarksPage";
import ChapterPage from "./pages/ChapterPage";
import DetailPage from "./pages/DetailPage";
import ItemPage from "./pages/ItemPage";
import { MainPage } from "./pages/MainPage";
import { ABOUT_PAGE, ADMIN_ROUTE, BOOKMARK_ROUTE, CHAPTER_PAGE, LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE, STUFF_ITEM, STUFF_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage />
    },
    {
        path: BOOKMARK_ROUTE,
        Component: <BookmarksPage />
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <AuthPage />
    },
    {
        path: REGISTER_ROUTE,
        Component: <AuthPage />
    },
    {
        path: MAIN_ROUTE,
        Component: <MainPage />
    },
    {
        path: STUFF_ROUTE,
        Component: <DetailPage />
    },
    {
        path: STUFF_ITEM,
        Component: <ItemPage />
    },
    {
        path: CHAPTER_PAGE,
        Component: <ChapterPage />
    },
    {
        path: ABOUT_PAGE,
        Component: <AboutPage />
    }
]