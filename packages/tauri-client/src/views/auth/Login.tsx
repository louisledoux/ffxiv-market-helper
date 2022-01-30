import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../api/hooks/useLogin';
import { Card } from '../../components/common/Card';
import { Disclaimer } from '../../components/common/Disclaimer';
import { Input } from '../../components/inputs/Input';
import { RoutesEnum } from '../../routes/Routes.enum';

function Login() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const [submitLogin] = useLogin({
    onCompleted: () => {
      navigate(RoutesEnum.ALERTS);
    },
  });

  const onSubmit = (values: any) => {
    submitLogin({
      variables: {
        ...values,
        email: values.email.trim(),
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
              action="login"
              className="space-y-4"
            >
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
              <div className="flex justify-center w-full mt-6">
                <button
                  type="submit"
                  className="border-primary text-primary border px-5 py-2 rounded"
                >
                  Se connecter
                </button>
              </div>
            </form>
            <span className="text-xs mt-2 text-center">S&apos;inscrire</span>
          </div>
        </Card>
      </div>
      <Disclaimer />
    </>
  );
}

export { Login };
