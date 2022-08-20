import PageTitle from "../components/common/PageTitle"
import Page from "../components/Page"
import useGetCharacter from "../hooks/firebase/useGetCharacter"

const HomePage = () => {
  // const char = useGetCharacter()
  return (
    <Page>
      <PageTitle title="Home" />
    </Page>
  )
}
export default HomePage
