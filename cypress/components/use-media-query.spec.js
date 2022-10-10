describe('useMediaQuery hooks', () => {
  const viewPorts = [
    {vp: 320, value: 'xs'},
    {vp: 500, value: 'sm'},
    {vp: 800, value: 'md'},
    {vp: 1200, value: 'lg'},
    {vp: 1600, value: 'xl'},
  ];

  it('useMediaQuery', () => {
    cy.visit('?name=usemediaquery');
    cy.viewport(480, 480);
    cy.get('[data-testid="use-media-query"]').contains('sm: yes');
    cy.viewport(1600, 1600);
    cy.get('[data-testid="use-media-query"]').contains('xl: yes');
  });
  it('useMediaQueryObject', () => {
    cy.visit('?name=usemediaqueryobject');
    viewPorts.forEach(({vp, value}) => {
      cy.viewport(vp, 480);
      cy.get('[data-testid="use-media-query-object"]').contains(value);
    });
  });
  it('useBreakpointKey', () => {
    cy.visit('?name=usebreakpointkey');
    viewPorts.forEach(({vp, value}) => {
      cy.viewport(vp, 480);
      cy.get('[data-testid="use-breakpoint-key"]').contains(value);
    });
  });
});
