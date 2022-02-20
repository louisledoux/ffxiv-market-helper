import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from '../../api/hooks/useSignup';
import { Card } from '../../components/common/Card';
import { Disclaimer } from '../../components/common/Disclaimer';
import { Input } from '../../components/inputs/Input';
import { Select } from '../../components/inputs/Select';
import { RoutesEnum } from '../../routes/Routes.enum';
import { datacenters } from '../../utils/ffxiv/datacenters';

function Signup() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const [selectedDatacenter, setSelectedDatacenter] = useState<string>(Object.keys(datacenters)[0]);
  const [submitSignup] = useSignup({
    onCompleted: () => {
      navigate(RoutesEnum.ALERTS);
    },
  });

  // TODO: find a way to remove the any type here, and solve the typescript error
  const onSubmit = (data: any) => {
    submitSignup({
      variables: {
        ...data,
        email: data.email.trim(),
      },
    });
  };
  return (
    <>
      <div className="flex flex-col h-screen justify-center space-y-8">
        <Card>
          <div className="flex flex-col pt-4 pb-6">
            <div className="
        font-fantasy text-3xl text-center text-primary tracking-wider
        drop-shadow-2xl mb-1"
            >
              FFXIV MARKET HELPER
            </div>
            <div className="text-center text-sm mb-6 text-neutralGrey italic">
              A FFXIV trading tool
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="signup"
              className="space-y-4"
            >
              <Input
                label="Pseudo"
                placeholder="Pseudo"
                register={register}
                name="pseudo"
                type="text"
                required
                id="pseudo"
                dark
              />
              <Input
                label="Email"
                placeholder="Adresse mail"
                register={register}
                name="email"
                type="email"
                required
                id="email"
                dark
              />
              <Input
                label="Mot de passe"
                placeholder="Mot de passe"
                register={register}
                name="password"
                type="password"
                required
                id="password"
                dark
              />
              <Select
                label="Centre de données"
                placeholder="Centre de données"
                register={register}
                name="datacenter"
                required
                id="datacenter"
                dark
                options={Object.keys(datacenters)}
                setValue={setSelectedDatacenter}
              />
              <Select
                label="Serveur"
                placeholder="Serveur"
                register={register}
                name="server"
                required
                id="server"
                dark
                options={datacenters[selectedDatacenter] || []}
              />
              <div className="flex justify-center w-full mt-6">
                <button
                  type="submit"
                  className="border-primary text-primary border px-5 py-2 rounded"
                >
                  S&apos;inscrire
                </button>
              </div>
            </form>
            <Link className="text-xs mt-2 text-center" to={RoutesEnum.LOGIN}>
              <span>Se connecter</span>
            </Link>
          </div>
        </Card>
      </div>
      <Disclaimer />
    </>
  );
}

export { Signup };
