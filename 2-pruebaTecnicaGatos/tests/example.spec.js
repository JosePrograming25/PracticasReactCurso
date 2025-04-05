// @ts-check
import { test, expect } from '@playwright/test'
import { log } from 'node:console'

const LOCALE_HOST_URL = 'http://localhost:5173/'
const URL_IMAGEN_GATOS_PALABRA = 'https://cataas.com/cat/says/'

const ObtenerPYImg = async (page) => {
  const text = await page.locator('p').first()
  const img = await page.locator('img').first()
  return { text, img }
}

test('verifica el hecho de gato y la imagen', async ({ page }) => {
  await page.goto(LOCALE_HOST_URL)
  const { text, img } = await ObtenerPYImg(page)
  await expect(text).toHaveText(/.+/)
  await expect(img).toHaveAttribute('src', new RegExp(`^${URL_IMAGEN_GATOS_PALABRA}`))

  const textContent = await text.textContent()
  const imageSrc = await img.getAttribute('src')
  const imageAlt = await img.getAttribute('alt')
  await expect(imageAlt).toBe('gato con ' + textContent?.split(' ')?.slice(0, 3)?.join(' '))
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(URL_IMAGEN_GATOS_PALABRA)).toBeTruthy()
})

test('verifica que cambie la imagen y hecho de gatos', async ({ page }) => {
  await page.goto(LOCALE_HOST_URL)
  // recolectamos los primeros datos
  const { text: primerTexto, img: primeraImg } = await ObtenerPYImg(page)
  await expect(primerTexto).toHaveText(/.+/)
  await expect(primeraImg).toHaveAttribute('src', new RegExp(`^${URL_IMAGEN_GATOS_PALABRA}`))
  const textContent = await primerTexto.textContent()
  const imageSrc = await primeraImg.getAttribute('src')
  const imageAlt = await primeraImg.getAttribute('alt')
  // hacemos click
  await page.locator('button').first().click()

  // Espera a que la respuesta de la API llegue
  const status = await page.waitForResponse(response => response.status() === 200)
  expect(status).toBeTruthy()
  await page.waitForTimeout(500)

  // recolectamos los egundos datos
  const { text: segundoTexto, img: segundaImg } = await ObtenerPYImg(page)
  const textContentFinal = await segundoTexto.textContent()
  const imageSrcFinal = await segundaImg.getAttribute('src')
  const imageAltFinal = await segundaImg.getAttribute('alt')
  console.log(textContent, '\n', textContentFinal)

  await expect(textContent).not.toBe(textContentFinal)
  await expect(imageSrc).not.toBe(imageSrcFinal)
  await expect(imageAlt).not.toBe(imageAltFinal)
})
