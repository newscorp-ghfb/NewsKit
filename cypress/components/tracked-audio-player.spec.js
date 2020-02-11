const waitForLoaded = oldValue => {
  cy.get('@sliderLabel', {timeout: 30000}).should('not.have.text', oldValue);
};

describe('skippable audio player', () => {
  beforeEach(() => {
    cy.visit('?name=tracked-audio-player');
    cy.fixture('podcasts.json').as('podcasts');
    cy.get('[data-testid="audio-player"]').as('player');
    cy.get('[data-testid="slider-track"]').as('sliderTrack');
    cy.get('[data-testid="slider-track"] + [data-testid="max-label"]').as(
      'sliderLabel',
    );
    waitForLoaded('00:00:00');
  });

  it('should play and pause audio when when clicking play button', () => {
    cy.get('[data-testid="audio-player-play-button"]').as('togglePlay');
    cy.get('@togglePlay')
      .find('title')
      .should('have.text', 'Play');
    cy.get('@togglePlay')
      .click()
      .find('title')
      .should('have.text', 'Pause');
    cy.get('@togglePlay')
      .click()
      .find('title')
      .should('have.text', 'Play');
  });

  it('should skip track forward and backward using the controls', () => {
    cy.get('[data-testid="audio-player-forward"]').as('forward');
    cy.get('[data-testid="audio-player-replay"]').as('replay');
    cy.get('@sliderTrack').should(slider => {
      expect(slider.attr('values')).to.equal('0');
    });
    cy.get('@forward')
      .click()
      .then(() => {
        cy.get('@sliderTrack').should(slider => {
          expect(slider.attr('values')).to.equal('10');
        });
      });
    cy.get('@replay')
      .click()
      .then(() => {
        cy.get('@sliderTrack').should(slider => {
          expect(slider.attr('values')).to.equal('0');
        });
      });
  });

  it('should skip back and forth from start to end of the track', () => {
    cy.get('[data-testid="audio-player-skip-next"]').as('skipNext');
    cy.get('[data-testid="audio-player-skip-previous"]').as('skipPrevious');

    cy.get('@skipNext').should('not.be.disabled');
    cy.get('@skipPrevious').should('be.disabled');
    cy.get('@podcasts').then(([podcast1]) => {
      cy.get('@player').should(audio => {
        expect(audio.attr('src')).to.equal(podcast1.src);
      });
    });

    cy.get('@skipNext')
      .click()
      .then(() => {
        cy.get('@podcasts').then(podcasts => {
          cy.get('@player')
            .its('autoplay')
            .should('be', true);
          cy.get('@player').should(audio => {
            expect(audio.attr('src')).to.equal(podcasts[1].src);
          });
        });
        cy.get('@skipPrevious').should('not.be.disabled');
      });
    cy.get('@skipNext')
      .click()
      .then(() => {
        cy.get('@podcasts').then(podcasts => {
          cy.get('@player').should(audio => {
            expect(audio.attr('src')).to.equal(podcasts[2].src);
          });
        });
        cy.get('@skipNext').should('be.disabled');
      });

    cy.get('@skipPrevious')
      .click()
      .then(() => {
        cy.get('@podcasts').then(podcasts => {
          cy.get('@player').should(audio => {
            expect(audio.attr('src')).to.equal(podcasts[1].src);
          });
        });
        cy.get('@skipNext').should('not.be.disabled');
      });
    cy.get('@skipPrevious')
      .click()
      .then(() => {
        cy.get('@podcasts').then(podcasts => {
          cy.get('@player').should(audio => {
            expect(audio.attr('src')).to.equal(podcasts[0].src);
          });
        });
        cy.get('@skipPrevious').should('be.disabled');
      });
  });

  it('should change player time when slider is clicked and skip backwards on time and track', () => {
    cy.get('[data-testid="audio-player-skip-next"]').as('skipNext');
    cy.get('[data-testid="audio-player-skip-previous"]').as('skipPrevious');

    cy.get('@podcasts').then(podcasts => {
      cy.get('@player').should(audio => {
        expect(audio.attr('src')).to.equal(podcasts[0].src);
      });
    });

    cy.get('@sliderLabel').then(label => {
      const oldValue = label.text();

      cy.get('@skipNext')
        .click()
        .then(() => {
          cy.get('@podcasts').then(podcasts => {
            cy.get('@player').should(audio => {
              expect(audio.attr('src')).to.equal(podcasts[1].src);
            });
          });
        });

      waitForLoaded(oldValue);

      cy.get('@sliderTrack').then(slider => {
        const {top, left} = slider.position();
        cy.get('@sliderTrack')
          .click(left + 500, top)
          .then(() => {
            cy.get('@sliderTrack').should(sliderEl => {
              expect(Number(sliderEl.attr('values'))).to.be.greaterThan(5);
            });
          });
      });

      cy.get('@skipPrevious')
        .click()
        .then(() => {
          cy.get('@sliderTrack').should(slider => {
            expect(slider.attr('values')).to.be.equal('0');
          });
          cy.get('@podcasts').then(podcasts => {
            cy.get('@player').should(audio => {
              expect(audio.attr('src')).to.equal(podcasts[1].src);
            });
          });
        });
      cy.get('@skipPrevious')
        .click()
        .then(() => {
          cy.get('@podcasts').then(podcasts => {
            cy.get('@player').should(audio => {
              expect(audio.attr('src')).to.equal(podcasts[0].src);
            });
          });
        });
    });
  });

  it('should change player volume when the slider is clicked', () => {
    cy.get('[data-testid="volume-control"]').as('volume');
    cy.get('@volume').then(slider => {
      const {top, left} = slider.position();
      cy.get('@volume')
        .click(left - 35, top)
        .then(() => {
          cy.get('@volume').should(sliderEl => {
            expect(Number(sliderEl.attr('values'))).to.be.lessThan(1);
          });
        });
    });
  });
});
