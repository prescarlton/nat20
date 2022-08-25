import { useState } from "react"
import CreateCharacterPage from "./steps/CreateCharacter"
import CreatePasswordPage from "./steps/CreatePassword"
import CreateUserPage from "./steps/CreateUser"
import IntroStep from "./steps/Intro"

const UserSignupPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const handleNextStep = () => setCurrentStep((prev) => prev + 1)
  const steps = [
    <IntroStep nextStep={handleNextStep} />,
    <CreatePasswordPage nextStep={handleNextStep} />,
    <CreateUserPage nextStep={handleNextStep} />,
    <CreateCharacterPage nextStep={handleNextStep} />,
  ]
  return steps[currentStep]
}
export default UserSignupPage
