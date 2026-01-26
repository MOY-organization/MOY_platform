import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Textarea } from "./ui/textarea";

export default function OrganizationForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();

  return (
    <div
      className={cn("rounded-2xl shadow-lg overflow-hidden", className)}
      {...props}
    >
      {/* HEADER */}
      <div className="flex gap-5 bg-primary text-white px-8 pt-6 pb-4">
        <div className="mx- mb-4 flex size-16 items-center justify-center rounded-full bg-white/20">
          <User className="h-10 w-10" />
        </div>

        <div className=" ">
          <h1 className="text-2xl font-bold">{t("profile.personal")}</h1>
          <p className="mt-1 text-sm opacity-90">
            {t("profile.organization.account")}
          </p>
        </div>
      </div>

      {/* FORM */}
      <Card className="rounded-none shadow-none">
        <CardContent className="p-6">
          <form>
            <FieldGroup>
              {/* first row */}
              <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* name */}
                <Field>
                  <FieldLabel htmlFor="name">
                    {t("profile.individual.name")}
                  </FieldLabel>
                  <Input
                    id="name"
                    value="name"
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </Field>

                {/* ID number */}
                <Field>
                  <FieldLabel htmlFor="id">
                    {t("profile.individual.idNumber")}
                  </FieldLabel>
                  <Input
                    id="id"
                    value="123"
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </Field>
              </FieldGroup>

              {/* residenceValidity */}
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="residenceValidity">
                    {t("profile.individual.residenceValidity")}
                  </FieldLabel>
                  <Input
                    id="residenceValidity"
                    value="13/12/2025"
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </Field>
              </FieldGroup>

              {/* Residence details */}
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ResidenceDetails">
                    {t("profile.individual.ResidenceDetails")}
                  </FieldLabel>
                  <Textarea
                    id="ResidenceDetails"
                    value=". . ."
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </Field>
              </FieldGroup>

              {/* residenceValidity */}
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="residenceValidity">
                    {t("profile.individual.residenceValidity")}
                  </FieldLabel>
                  <Input
                    id="residenceValidity"
                    value="13/12/2025"
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </Field>
              </FieldGroup>

              {/* residenceValidity */}
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="residenceValidity">
                    {t("profile.individual.residenceValidity")}
                  </FieldLabel>
                  <Input
                    id="residenceValidity"
                    value="13/12/2025"
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </Field>
              </FieldGroup>

              {/* Buttons */}
              <div className="flex gap-5">
                <Button className="px-10">
                  {t("profile.individual.edit")}
                </Button>
                <Button className="px-10 bg-green-700 hover:bg-green-600">
                  {t("profile.individual.service")}
                </Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
