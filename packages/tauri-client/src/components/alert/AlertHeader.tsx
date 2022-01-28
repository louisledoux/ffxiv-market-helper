function AlertHeader() {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-neutralGrey text-right mb-1">
        <button className="italic" type="button">
          + Créer une alerte
        </button>
      </span>
      <div className="relative">
        <span className="text-xs text-primary absolute -top-2.5 left-5 bg-lightBackground px-2">
          Mes alertes
        </span>
        <hr className="border-primary" />
      </div>
    </div>
  );
}

export { AlertHeader };
