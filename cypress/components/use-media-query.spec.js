describe('useMediaQuery hooks', () => {
  const viewPorts = [
    {vp: 320, value: 'xs'},
    {vp: 500, value: 'sm'},
    {vp: 800, value: 'md'},
    {vp: 1200, value: 'lg'},
    {vp: 1600, value: 'xl'},
  ];
  beforeEach(() => {
    cy.visit('?name=use-media-query-hook');
    cy.wait(50);
  });

  it('useMediaQueryObject', () => {
    viewPorts.forEach(({vp, value}) => {
      cy.viewport(vp, 480);
      cy.get('[data-testid="use-media-query-hook"]').contains(value);
    });
  });
  it('useBreakpoint', () => {
    viewPorts.forEach(({vp, value}) => {
      cy.viewport(vp, 480);
      cy.get('[data-testid="use-breakpoint"]').contains(value);
    });
  });
});
