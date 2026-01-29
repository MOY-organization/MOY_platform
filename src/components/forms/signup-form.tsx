import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type UserType = "individual" | "organization";

export default function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  const [userType, setUserType] = useState<UserType>("individual");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userType === "individual") navigate("/person-profile");
    else if (userType === "organization") navigate("/organization-profile");
  };

  return (
    <div
      className={cn("rounded-2xl shadow-lg overflow-hidden", className)}
      {...props}
    >
      {/* HEADER */}
      <div className="bg-primary text-white text-center px-6 pt-10 pb-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <LogIn className="h-6 w-6" />
        </div>

        <h1 className="text-xl font-bold">{t("form.gate")}</h1>
        <p className="mt-1 text-sm opacity-90">{t("form.reservation")}</p>
      </div>

      {/* FORM */}
      <Card className="rounded-none shadow-none dark:bg-slate-900">
        <CardContent className="p-6">
          <form>
            <FieldGroup>
              {/* USER TYPE TOGGLE */}
              <Field>
                <FieldLabel>{t("form.userType")}</FieldLabel>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUserType("individual")}
                    className={cn(
                      "rounded-md border px-4 py-2 text-sm transition",
                      userType === "individual"
                        ? "bg-primary text-white"
                        : "bg-muted",
                    )}
                  >
                    {t("form.individual")}
                  </button>

                  <button
                    type="button"
                    onClick={() => setUserType("organization")}
                    className={cn(
                      "rounded-md border px-4 py-2 text-sm transition",
                      userType === "organization"
                        ? "bg-primary text-white"
                        : "bg-muted",
                    )}
                  >
                    {t("form.organization")}
                  </button>
                </div>
              </Field>

              {/* CONDITIONAL ID */}
              {userType === "individual" ? (
                <Field>
                  <FieldLabel htmlFor="nationalId">
                    {t("auth.nationalId")}
                    <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    id="nationalId"
                    placeholder={t("auth.nationalIdPlaceholder")}
                    required
                  />
                </Field>
              ) : (
                <>
                  <Field>
                    <FieldLabel htmlFor="orgNationalId">
                      {t("auth.orgNationalId")}{" "}
                      <span className="text-red-500">*</span>
                    </FieldLabel>
                    <Input
                      id="orgNationalId"
                      placeholder={t("auth.orgNationalIdPlaceholder")}
                      required
                    />
                  </Field>
                </>
              )}

              {/* CONDITIONAL name */}
              {userType === "individual" ? (
                <Field>
                  <FieldLabel htmlFor="fullName">
                    {t("auth.fullName")}
                    <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    id="fullName"
                    placeholder={t("auth.fullNamePlaceholder")}
                    required
                  />
                </Field>
              ) : (
                <>
                  <Field>
                    <FieldLabel htmlFor="orgNationalName">
                      {t("auth.organizationName")}
                      <span className="text-red-500">*</span>
                    </FieldLabel>
                    <Input
                      id="orgNationalName"
                      placeholder={t("auth.organizationNamePlaceholder")}
                      required
                    />
                  </Field>
                </>
              )}

              <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email">
                    {t("auth.email")}
                    <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    id="email"
                    placeholder={t("auth.emailPlaceholder")}
                    required
                  />
                </Field>

                {/* PhoneNumber */}
                <Field>
                  <FieldLabel htmlFor="phoneNumber">
                    {t("auth.phoneNumber")}{" "}
                    <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    id="phoneNumber"
                    placeholder={t("auth.phoneNumberPlaceholder")}
                    required
                  />
                </Field>
              </FieldGroup>

              <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* PASSWORD */}
                <Field>
                  <FieldLabel htmlFor="password">
                    {t("auth.password")} <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t("auth.passwordPlaceholder")}
                    required
                  />
                </Field>

                {/* Confirm PASSWORD */}
                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    {t("auth.confirmPassword")}{" "}
                    <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={t("auth.confirmPasswordPlaceholder")}
                    required
                  />
                </Field>
              </FieldGroup>

              {/* SUBMIT */}
              <Field>
                <Button className="w-full" onClick={handleSubmit}>
                  {t("auth.signup")}
                </Button>

                <FieldDescription className="text-center">
                  {t("auth.account")}{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    {t("auth.login")}
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
