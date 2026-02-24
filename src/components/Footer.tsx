const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-lg font-heading font-bold gradient-text">PulseDigital</span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} PulseDigital. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
