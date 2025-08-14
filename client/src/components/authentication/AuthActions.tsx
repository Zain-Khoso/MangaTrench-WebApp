'use client';

// Lib Imports.
import { useState } from 'react';

// Assets.
import { MdMail } from 'react-icons/md';

// Components.
import SignUpForm from './SignUpForm';
import ArrowAnimationButton from '../ArrowAnimationButton';
import SSOButton from './SSOButton';
import { Separator } from '../shadcn/separator';

// This component holds the Auth Options for both Sign in and Sign up pages.
export default function AuthActions() {
  const [step, setStep] = useState(0);

  const prevStep = () => setStep((val) => --val);
  const nextStep = () => setStep((val) => ++val);

  return step === 0 ? (
    <main className="space-y-6 md:w-full md:max-w-xs">
      <ul className="space-y-4">
        <li>
          <SSOButton provider="google" />
        </li>
        <li>
          <SSOButton provider="github" />
        </li>
        <li>
          <SSOButton provider="twitter" />
        </li>
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
  );
}
