'use client';

// Lib Imports.
import { useState } from 'react';

// Hooks.
import { useSessionCookie } from '@/hooks/useSessionCookie';

// Assets.
import { MdMail } from 'react-icons/md';

// Components.
import SignUpForm from './SignUpForm';
import ArrowAnimationButton from '../ArrowAnimationButton';
import SSOButtons from './SSOButtons';
import { Separator } from '../shadcn/separator';
import Spinner from '../Spinner';

// This component holds the UI of the SignUp page.
export default function SignUpPageUI() {
  const [step, setStep] = useState(0);

  const isSessionCookieLoading = useSessionCookie();

  const prevStep = () => setStep((val) => --val);
  const nextStep = () => setStep((val) => ++val);

  return (
    <>
      {isSessionCookieLoading ? <Spinner /> : <></>}

      {step === 0 ? (
        <main className="space-y-6 md:w-full md:max-w-xs">
          <ul className="space-y-4">
            <SSOButtons />

            <li>
              <Separator className="bg-foreground/20 my-8" />
            </li>

            <li>
              <ArrowAnimationButton
                icon={MdMail}
                label="Continue with Email"
                onClick={nextStep}
                variant="secondary"
              />
            </li>
          </ul>
        </main>
      ) : (
        <SignUpForm prevStep={prevStep} />
      )}
    </>
  );
}
