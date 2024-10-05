import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
    const tabs=["Home","About","Career"]

  return (
    <div className="flex w-full m-10">
        <ui className>{tabs?.map((item)=><li key={item}>{item}</li>)}</ui>
        <ThemeSwitcher/>
    </div>
  )
}

export default Header