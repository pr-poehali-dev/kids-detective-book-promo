import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHptLTIgNmgtNHYtNGg0djR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold mb-4">
                🔍 Новинка серии
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Юные Сыщики: Тайна Старого Особняка
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Захватывающее детективное приключение для юных читателей
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:scale-105 transition-transform"
                  onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Купить на Литрес
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-accent/30 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/980fbb1d-d858-4a40-b678-c0ed39e4650f/files/834d3936-742a-4e40-8440-fa026ab56550.jpg"
                alt="Обложка книги"
                className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
              О книге
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow animate-fade-in hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h3 className="font-bold text-xl mb-2 text-center">Часть серии</h3>
                  <p className="text-muted-foreground text-center">
                    Новая захватывающая глава в серии о молодых детективах
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 text-center">🎯</div>
                  <h3 className="font-bold text-xl mb-2 text-center">Возраст 10-14 лет</h3>
                  <p className="text-muted-foreground text-center">
                    Идеально подходит для среднего школьного возраста
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 text-center">🔮</div>
                  <h3 className="font-bold text-xl mb-2 text-center">С продолжением</h3>
                  <p className="text-muted-foreground text-center">
                    Следите за новыми приключениями героев
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white shadow-xl">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Сюжет</h3>
                <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                  <p>
                    Группа талантливых школьников-детективов получает загадочное письмо о пропаже 
                    старинного артефакта в заброшенном особняке на окраине города. То, что начинается 
                    как обычное расследование, превращается в невероятное приключение, полное тайн и неожиданных открытий.
                  </p>
                  <p>
                    Каждый из юных сыщиков обладает уникальными способностями: один разгадывает шифры, 
                    другой чувствует ложь, третий мастер маскировки. Работая вместе, они раскрывают 
                    секреты, которые скрывались столетиями.
                  </p>
                  <div className="flex items-start gap-3 bg-secondary/10 p-4 rounded-lg mt-6">
                    <Icon name="Sparkles" className="text-secondary mt-1" size={24} />
                    <p className="font-semibold text-secondary">
                      Динамичный сюжет, яркие персонажи и неожиданные повороты — 
                      книга, от которой невозможно оторваться!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="author" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
              Об авторе
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
            
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img 
                      src="https://cdn.poehali.dev/projects/980fbb1d-d858-4a40-b678-c0ed39e4650f/files/267579cf-7a37-4c7f-8884-f7f8a40d87ac.jpg"
                      alt="Автор"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 to-transparent"></div>
                  </div>
                  
                  <div className="md:col-span-3 p-8 md:p-12 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-primary">Елена Волкова</h3>
                      <p className="text-muted-foreground text-lg">Автор детских детективов</p>
                    </div>
                    
                    <div className="space-y-4 text-lg text-foreground/90">
                      <p>
                        Елена Волкова — автор бестселлеров для детей и подростков с 15-летним опытом. 
                        Её книги переведены на 12 языков и завоевали множество литературных премий.
                      </p>
                      <p>
                        Серия "Юные Сыщики" стала её визитной карточкой — более 500 000 проданных экземпляров 
                        и миллионы юных читателей по всему миру следят за приключениями героев.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                        <Icon name="Award" className="text-accent" size={20} />
                        <span className="font-semibold">12 наград</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                        <Icon name="BookOpen" className="text-secondary" size={20} />
                        <span className="font-semibold">25+ книг</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                        <Icon name="Users" className="text-primary" size={20} />
                        <span className="font-semibold">500K+ читателей</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="buy" className="py-20 bg-gradient-to-br from-secondary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHptLTIgNmgtNHYtNGg0djR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните приключение прямо сейчас!
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Доступна в электронном и аудио форматах на Литрес
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Icon name="Zap" className="text-accent" size={24} />
                <span className="font-semibold text-lg">Моментальная загрузка</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Icon name="Star" className="text-accent" size={24} />
                <span className="font-semibold text-lg">Рейтинг 4.8/5</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 font-bold px-12 py-8 text-xl shadow-2xl hover:scale-110 transition-transform"
              onClick={() => window.open('https://www.litres.ru/', '_blank')}
            >
              <Icon name="ShoppingCart" className="mr-3" size={24} />
              Купить на Литрес
              <Icon name="ExternalLink" className="ml-3" size={20} />
            </Button>
            
            <p className="mt-6 text-white/80 text-sm">
              💳 Безопасная оплата • 📱 Доступно на всех устройствах • 🎧 Есть аудиоверсия
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2026 Юные Сыщики. Серия детективных книг для детей.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
