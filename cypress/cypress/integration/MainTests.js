const currentURL='http://localhost:3000/ekeyboard'

const viewports = ['ipad-2', 'iphone-3', 'iphone-5', 'iphone-6', 'iphone-6+', 'iphone-x', 'iphone-xr',
 'macbook-11', 'macbook-13', 'macbook-15', 'samsung-note9', 'samsung-s10']

describe('RWD tests', () => {
    it('Should check if letters are going nicely, and buttons are visible', () => {

        viewports.forEach((viewport) => {
            cy.viewport(viewport)
            cy.wait(500)
            cy.visit(currentURL)
            cy.get(':nth-child(1) > .whiteButton').click()
            cy.get('.PlayButton').click()
            cy.wait(1000)
            cy.screenshot(viewport)
        })

        cy.viewport(500,250)
        cy.wait(500)
        cy.visit(currentURL)
        cy.get(':nth-child(1) > .whiteButton').click()
        cy.get('.PlayButton').click()
        cy.wait(1000)
        cy.screenshot('smallPhone')

        viewports.forEach((viewport) => {
            cy.viewport(viewport, 'landscape')
            cy.wait(500)
            cy.visit(currentURL)
            cy.get(':nth-child(1) > .whiteButton').click()
            cy.get('.PlayButton').click()
            cy.wait(1000)
            cy.screenshot(viewport+'landscape')
        })

        cy.viewport(250, 500)
        cy.wait(500)
        cy.visit(currentURL)
        cy.get(':nth-child(1) > .whiteButton').click()
        cy.get('.PlayButton').click()
        cy.wait(1000)
        cy.screenshot('smallPhoneLandscapre')

    })
})

describe('change keyboard', () => {
    it('Should test if the change keyboard button works', () => {

        cy.visit(currentURL)
        cy.get(':nth-child(1) > .whiteButton').click()
        cy.get('.PlayButton').click()
        cy.get('.changeKeyboardButton').click()
        cy.get('.changeKeyboardButton').should('contain', 'PIANO')
        cy.get('.keyboard > :nth-child(1)').should('contain', 'c')
        cy.get('.changeKeyboardButton').click()
        cy.get('.changeKeyboardButton').should('contain', 'PC')
        cy.get('.keyboard > :nth-child(1)').should('contain', 's')
    })
})

describe('Test song navigation', () => {
    it('Should click all songs and check for class active', () => {

        cy.visit(currentURL)
        cy.get('.KeyboardOverlay').should('be.visible')
        cy.get(':nth-child(1) > .whiteButton').click()
        cy.get(':nth-child(1) > .whiteButton').should('have.class', 'active')
        cy.get('.KeyboardOverlay').should('be.visible')
        cy.get('ul > :nth-child(2) > .whiteButton').click()
        cy.get('ul > :nth-child(2) > .whiteButton').should('have.class', 'active')
        cy.get('.KeyboardOverlay').should('be.visible')
        cy.get('ul > :nth-child(3) > .whiteButton').click()
        cy.get('ul > :nth-child(3) > .whiteButton').should('have.class', 'active')
        cy.get('.KeyboardOverlay').should('be.visible')
    })
})


describe('change velocity', () => {
    it('Should test if the change velocity buttons works, and overlay is visible', () => {

        cy.visit(currentURL)
        cy.get('.velocityButton:nth-child(1)').click()
        cy.get('.velocityButtonsWrapper>span').should('contain', '2')
        cy.get('.KeyboardOverlay').should('be.visible')
        cy.get('.velocityButton:nth-child(3)').click()
        cy.get('.velocityButton:nth-child(3)').click()
        cy.get('.velocityButtonsWrapper>span').should('contain', '0')
        cy.get('.KeyboardOverlay').should('be.visible')

    })
})

