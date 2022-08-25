import Button from "../../../components/common/Button"
import DarkModeSwitch from "../../../components/common/DarkModeSwitch"
import FormPage from "../../../components/common/FormPage"
import ProtectedRoute from "../../ProtectedRoute"

const IntroStep = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <ProtectedRoute>
      <FormPage title="Sign Up">
        <div className="flex flex-col justify-between flex-1 dark:text-white">
          <h2>
            Before you get started, there's a few things you need to fill out.
            You'll need to create a new password, set up your profile, and
            create your first character. Click below to get started.
          </h2>
          <DarkModeSwitch value={0} onChange={() => {}} />
          <Button onClick={nextStep}>Continue</Button>
        </div>
      </FormPage>
    </ProtectedRoute>
  )
}
export default IntroStep
