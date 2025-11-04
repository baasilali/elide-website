const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-[hsl(var(--glow))] bg-clip-text text-transparent">
            Salve!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Quid est Elide?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-6 text-foreground">Praecipuae Proprietates</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Polyglot Capabilities</h5>
                  <p className="text-muted-foreground">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Performance Optimized</h5>
                  <p className="text-muted-foreground">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Modern Architecture</h5>
                  <p className="text-muted-foreground">Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="text-4xl font-bold text-primary mb-3">Fast</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Velocitas</h4>
            <p className="text-muted-foreground">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="text-4xl font-bold text-primary mb-3">Safe</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Securitas</h4>
            <p className="text-muted-foreground">
              Et harum quidem rerum facilis est et expedita distinctio nam libero tempore
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="text-4xl font-bold text-primary mb-3">Modern</div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Modernus</h4>
            <p className="text-muted-foreground">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
