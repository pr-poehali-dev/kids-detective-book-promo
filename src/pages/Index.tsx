import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">🔍 Детективы</h1>
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <a href="#buy">Купить книгу</a>
          </Button>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Серия о молодых сыщиках
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              Тайна поселка<br />"Сосновый Бор"
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              За забором шипит тишина. Пять друзей нашли её источник...
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <a href="https://www.litres.ru/72995277/" target="_blank" rel="noopener noreferrer">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Купить на Литрес
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="#about">Подробнее</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="https://cdn.poehali.dev/projects/980fbb1d-d858-4a40-b678-c0ed39e4650f/files/f06558ba-2c9e-4e27-8fea-570deab2f724.jpg"
              alt="Обложка книги Тайна поселка Сосновый Бор"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">О книге</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          </div>

          <Card className="border-2 border-primary/10 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Лето в «Сосновом Бору» началось с тишины. Не с мирной, а с той, что звенит в ушах и выжигает землю. Пять друзей нашли её источник: старую избу, зажатую в кольцо нового, идеального забора. Ночью оттуда доносилось странное металлическое шипение. Днём появлялись люди, похожие не на жильцов, а на актёров в плохой пьесе. Они молча выносили чёрные мешки.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Любопытство стало навязчивой идеей. А потом — страхом. Потому что тем, кто скрывается за забором, не понравилось внимание. И они дали это понять. Теперь ребятам предстоит узнать, что опаснее: тайна, что прячется в заброшенном доме, или правда, которая выйдет наружу, когда они её найдут.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="space-y-3 p-0">
                <Icon name="Users" className="mx-auto text-primary" size={40} />
                <h4 className="font-bold text-lg">Для юных читателей</h4>
                <p className="text-muted-foreground">Захватывающий сюжет для детей и подростков</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="space-y-3 p-0">
                <Icon name="BookOpen" className="mx-auto text-secondary" size={40} />
                <h4 className="font-bold text-lg">Первая книга серии</h4>
                <p className="text-muted-foreground">Начало приключений молодых сыщиков</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="space-y-3 p-0">
                <Icon name="Lightbulb" className="mx-auto text-accent" size={40} />
                <h4 className="font-bold text-lg">Развивает мышление</h4>
                <p className="text-muted-foreground">Логика, внимание к деталям, дедукция</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-2 border-secondary/20">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 p-8 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/980fbb1d-d858-4a40-b678-c0ed39e4650f/files/79dfa927-fff7-4fbc-b962-2ac152684377.jpg"
                  alt="Автор Даша Скворцова"
                  className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl"
                />
              </div>
              <CardContent className="p-8 space-y-4 flex flex-col justify-center">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Даша Скворцова</h3>
                  <p className="text-secondary font-semibold">Автор</p>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Создатель увлекательных детективных историй для юных читателей. Даша верит, что каждый ребёнок — это маленький детектив, способный разгадать самую запутанную тайну.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section id="buy" className="container mx-auto px-4 py-16 mb-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Купить книгу</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          </div>
          
          <Card className="p-8 border-2 border-primary/20 shadow-xl bg-gradient-to-br from-purple-50 to-orange-50">
            <CardContent className="space-y-6 p-0">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">Доступно на Литрес</p>
                <p className="text-muted-foreground">Электронная и аудио версии</p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-xl py-6 px-12"
              >
                <a href="https://www.litres.ru/72995277/" target="_blank" rel="noopener noreferrer">
                  <Icon name="ExternalLink" className="mr-2" size={24} />
                  Перейти на Литрес
                </a>
              </Button>
              <div className="flex justify-center gap-8 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>Мгновенная доставка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>Читайте на любом устройстве</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary/5 border-t border-primary/10 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Даша Скворцова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;