const normalize = (value: string) => encodeURI(value)

const islamiiDarkScreens = [
  '/screens/islamii/splash_screen.png',
  '/screens/islamii/mark screen.png',
  '/screens/islamii/audio screen.png',
  '/screens/islamii/صفحه القراءة.png',
  '/screens/islamii/القراء.png',
  '/screens/islamii/الاذاعه.png',
  '/screens/islamii/الاحاديث.png',
  '/screens/islamii/الادعيه والاذكار اليوميه.png',
  '/screens/islamii/الاذكار والادعيه.png',
  '/screens/islamii/اذكار الصباح.png',
  '/screens/islamii/اذكار المساء.png',
  '/screens/islamii/اذكار بعد الصلاة.png',
  '/screens/islamii/المواقيت.png',
  '/screens/islamii/اعدادات الاذان.png',
  '/screens/islamii/اتجاه القبلة.png',
  '/screens/islamii/المصحف.png',
  '/screens/islamii/تنبيهات نهاري.png',
  '/screens/islamii/اذكار الصباح نهاري.png',
  '/screens/islamii/اذكار المساء نهاري.png',
  '/screens/islamii/اذكار بعد الصلاة نهاري.jpeg',
  '/screens/islamii/الادعيه والاذكار اليوميه نهاري.png',
  '/screens/islamii/القبلة نهاري.png',
].map(normalize)

const islamiiLightScreens = [
  '/screens/islamii/home light.png',
  '/screens/islamii/light sura.png',
  '/screens/islamii/reciters light.png',
  '/screens/islamii/audio light.png',
  '/screens/islamii/radio light.png',
  '/screens/islamii/radio audio light.png',
  '/screens/islamii/hadith light.png',
  '/screens/islamii/time light.png',
].map(normalize)

const islamiiScreens = [...islamiiDarkScreens, ...islamiiLightScreens]

const eventlyScreens = [
  '/screens/evently/splash screen.png',
  '/screens/evently/onboarding 1.png',
  '/screens/evently/onboarding 2.png',
  '/screens/evently/onboarding 3.png',
  '/screens/evently/login screen.png',
  '/screens/evently/home screen 1.png',
  '/screens/evently/home screen 2.png',
  '/screens/evently/home screen 3.png',
  '/screens/evently/date screen.png',
  '/screens/evently/event details.png',
  '/screens/evently/create screen.png',
  '/screens/evently/add event1.png',
  '/screens/evently/add event2.png',
  '/screens/evently/add event 2.png',
  '/screens/evently/sucess add.png',
  '/screens/evently/favourite screen.png',
  '/screens/evently/profile screen.png',
  '/screens/evently/profile dark mood.png',
  '/screens/evently/dark mood.png',
  '/screens/evently/edit event.png',
  '/screens/evently/time screen.png',
].map(normalize)

const newsScreens = [
  '/screens/news/splash screen.png',
  '/screens/news/home screen 1.png',
  '/screens/news/home screen 2.png',
  '/screens/news/category1.png',
  '/screens/news/category2.png',
  '/screens/news/drawer.png',
  '/screens/news/artical details.png',
  '/screens/news/artical source.png',
].map(normalize)

const moviesAppScreens = [
  '/screens/movies-app/splash screen 1.png',
  '/screens/movies-app/splash screen 2.png',
  '/screens/movies-app/splash screen 3.png',
  '/screens/movies-app/splash screen 4.png',
  '/screens/movies-app/splash screen 5.png',
  '/screens/movies-app/splash screen 6.png',
  '/screens/movies-app/login screen.png',
  '/screens/movies-app/create account.png',
  '/screens/movies-app/reset password.png',
  '/screens/movies-app/home screen.png',
  '/screens/movies-app/browse screen.png',
  '/screens/movies-app/search screen.png',
  '/screens/movies-app/movies details 1.png',
  '/screens/movies-app/movies details 2.png',
  '/screens/movies-app/profile screen.png',
  '/screens/movies-app/edit profile.png',
].map(normalize)

const coffeeAppScreens = [
  '/screens/coffee-app/welcome.png',
  '/screens/coffee-app/sign in.png',
  '/screens/coffee-app/register.png',
  '/screens/coffee-app/forget.png',
  '/screens/coffee-app/home.png',
  '/screens/coffee-app/favorites_1.png',
  '/screens/coffee-app/favorites_2.png',
  '/screens/coffee-app/cart.png',
  '/screens/coffee-app/confirm order.png',
  '/screens/coffee-app/profile.png',
  '/screens/coffee-app/clear favorites.png',
].map(normalize)

export const shots: Record<string, string[]> = {
  islamii: [...islamiiScreens],
  islamiiApp: [...islamiiScreens],
  evently: [...eventlyScreens],
  news: [...newsScreens],
  newsApp: [...newsScreens],
  moviesApp: [...moviesAppScreens],
  movies: [...moviesAppScreens],
  coffeeApp: [...coffeeAppScreens],
  coffee: [...coffeeAppScreens],
  m3loma: [],
  contactApp: [],
  tawseela: [],
  coffeeShop: [...coffeeAppScreens],
}
