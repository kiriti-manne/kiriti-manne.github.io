const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div className="text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} Kiriti Manne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
