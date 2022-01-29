type ICardProps = {
  children: JSX.Element,
}

function Card({ children }: ICardProps) {
  return (
    <div className="mt-5 pt-2 pb-3 px-3 bg-darkBackground rounded-md shadow-defaultShadow">
      {children}
    </div>
  );
}

export { Card };
