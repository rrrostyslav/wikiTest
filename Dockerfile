FROM mcr.microsoft.com/playwright:v1.49.0-jammy

RUN npx playwright install chromium

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npx", "playwright", "test", "--reporter=html"]