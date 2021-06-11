import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Peencha seu endereço e veja todos profissionais de sua localidade"
        }
      />
      <UserInformation
        name={"Matheus"}
        picture={"https://github.com/matheusrcruz.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
