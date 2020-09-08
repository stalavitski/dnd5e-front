import CharacterList from "../characterList/components/CharacterList";
import Layout from "../wiki/components/Layout";
import NoMatch from "./components/NoMatch";


const appRoutes = [
  {
    component: Layout,
    exact: true,
    path: "/"
  },
  {
    component: Layout,
    exact: true,
    path: "/race"
  },
  {
    component: Layout,
    exact: true,
    path: "/race/:id"
  },
  {
    component: CharacterList,
    exact: true,
    path: "/character-list"
  },
  {
    component: NoMatch,
    exact: false,
    path: "*"
  },
]

export {
  appRoutes
}
