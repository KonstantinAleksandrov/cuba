import style from './Tab.module.css'
import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import {ReactNode, FC, useEffect} from "react";

interface Tab {
  title: string
  link: string
  content: string | ReactNode
}

const Tabs:FC<{tabList: Tab[]}> = ({tabList}) => {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('filter'))
  });

  useEffect(() => {
    setSearchParams('filter=cuba')
  }, []);


  return(
    <main className={style.tabGroup}>
      <header className={style.tabHeader}>
        {tabList?.map((tab, index) => <Link key={tab.link + index} to={tab.link}>{tab.title}</Link>)}
      </header>
      <Routes>
        {tabList?.map((tab, index) =>
          <Route key={tab.link + index} path={tab.link} element={<div className={style.tab}>{tab.content}</div>}/>
        )}
      </Routes>
    </main>
  )
}
export default Tabs