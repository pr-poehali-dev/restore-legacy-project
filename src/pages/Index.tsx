import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/f87157ec-991b-4846-b5dd-ce964d3155ac/files/03553040-7531-40b0-a464-905bc202cb9a.jpg" 
              alt="Bull Logo" 
              className="h-12 w-12 object-contain rounded-full bg-accent/10 p-1"
            />
            <span className="text-2xl font-bold text-accent">ИК ГЕРМЕС</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("main")} className="text-foreground hover:text-accent transition-colors">Главная</button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors">О компании</button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection("analytics")} className="text-foreground hover:text-accent transition-colors">Аналитика</button>
            <button onClick={() => scrollToSection("investments")} className="text-foreground hover:text-accent transition-colors">Инвестиции</button>
            <button onClick={() => scrollToSection("contacts")} className="text-foreground hover:text-accent transition-colors">Контакты</button>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Консультация
          </Button>
        </nav>
      </header>

      <section 
        id="main" 
        className="min-h-screen relative flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 41, 0.85), rgba(10, 25, 41, 0.85)), url('https://cdn.poehali.dev/projects/f87157ec-991b-4846-b5dd-ce964d3155ac/files/a7dda20b-a4a3-46a5-94af-ae740a8bb2c4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Инвестируйте в будущее
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональное управление капиталом на мировых финансовых рынках
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-semibold px-8">
              Начать инвестировать
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 text-lg font-semibold px-8">
              Узнать больше
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                <div className="text-muted-foreground">клиентов</div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+ млрд ₽</div>
                <div className="text-muted-foreground">под управлением</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">О компании</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Лидер инвестиционного рынка</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                ИК ГЕРМЕС — ведущая инвестиционная компания, предоставляющая полный спектр услуг на финансовых рынках. 
                Мы работаем с частными и корпоративными клиентами, предлагая индивидуальные инвестиционные решения.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Наша команда профессионалов имеет многолетний опыт работы на международных биржах, включая 
                NYSE, LSE, и другие мировые торговые площадки.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-accent" size={24} />
                  <span className="text-foreground">Лицензия ЦБ РФ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-accent" size={24} />
                  <span className="text-foreground">Гарантия надежности</span>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <img 
                src="https://cdn.poehali.dev/projects/f87157ec-991b-4846-b5dd-ce964d3155ac/files/53600b77-47e8-40cd-9fe5-062c8874fd0a.jpg" 
                alt="Analytics" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Брокерское обслуживание</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Доступ к торгам на российских и зарубежных биржах. Минимальные комиссии и профессиональная поддержка.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="PieChart" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Управление активами</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Индивидуальное доверительное управление с учетом ваших целей и уровня риска.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="LineChart" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Инвестиционное консультирование</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Экспертные рекомендации по формированию и оптимизации инвестиционного портфеля.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Building2" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Корпоративные финансы</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Консультации по сделкам M&A, IPO и привлечению финансирования для бизнеса.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Briefcase" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Структурные продукты</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Инновационные инвестиционные решения с защитой капитала и повышенной доходностью.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Private Banking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Эксклюзивное обслуживание для состоятельных клиентов с персональным менеджером.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="analytics" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Аналитика и прогнозы</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-background border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">Рыночный обзор</h3>
                    <Icon name="TrendingUp" className="text-green-500" size={28} />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Ежедневные аналитические материалы по российскому и зарубежным рынкам от наших экспертов.
                  </p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    Читать обзоры
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">Инвестиционные идеи</h3>
                    <Icon name="Lightbulb" className="text-accent" size={28} />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Готовые инвестиционные стратегии и рекомендации по отдельным активам.
                  </p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    Смотреть идеи
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-background border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Ключевые показатели</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Индекс Мосбиржи</div>
                    <div className="text-2xl font-bold text-foreground">3,245.67</div>
                    <div className="text-green-500 text-sm">+2.34%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">S&P 500</div>
                    <div className="text-2xl font-bold text-foreground">4,876.23</div>
                    <div className="text-green-500 text-sm">+1.12%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Нефть Brent</div>
                    <div className="text-2xl font-bold text-foreground">$82.45</div>
                    <div className="text-red-500 text-sm">-0.87%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">USD/RUB</div>
                    <div className="text-2xl font-bold text-foreground">92.35</div>
                    <div className="text-green-500 text-sm">+0.45%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="investments" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Инвестиционные решения</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-accent">Консервативный портфель</h3>
                <div className="text-3xl font-bold mb-2 text-foreground">8-10%</div>
                <p className="text-sm text-muted-foreground mb-6">годовых в рублях</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Минимальный риск</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Облигации и фонды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Защита капитала</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/20 ring-2 ring-accent">
              <CardContent className="p-8">
                <div className="text-xs font-semibold text-accent mb-2">ПОПУЛЯРНЫЙ</div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Сбалансированный портфель</h3>
                <div className="text-3xl font-bold mb-2 text-foreground">12-15%</div>
                <p className="text-sm text-muted-foreground mb-6">годовых в рублях</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Умеренный риск</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Акции и облигации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Оптимальная доходность</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-accent">Агрессивный портфель</h3>
                <div className="text-3xl font-bold mb-2 text-foreground">18-25%</div>
                <p className="text-sm text-muted-foreground mb-6">годовых в рублях</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Высокий риск</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Акции роста</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-muted-foreground">Максимальная прибыль</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-background border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Адрес</h3>
                      <p className="text-muted-foreground">Москва, ул. Тверская, д. 10, офис 500</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">8 (800) 555-35-35</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@hermes-ic.ru</p>
                      <p className="text-muted-foreground">support@hermes-ic.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Clock" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-background border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Свяжитесь с нами</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Имя</label>
                      <input 
                        type="text" 
                        className="w-full bg-card border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full bg-card border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-card border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-card border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Расскажите о ваших инвестиционных целях..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-12 border-t border-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/f87157ec-991b-4846-b5dd-ce964d3155ac/files/03553040-7531-40b0-a464-905bc202cb9a.jpg" 
                  alt="Bull Logo" 
                  className="h-10 w-10 object-contain rounded-full bg-accent/10 p-1"
                />
                <span className="text-xl font-bold text-accent">ИК ГЕРМЕС</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Профессиональное управление капиталом с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Брокеридж</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Управление активами</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Консалтинг</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Private Banking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent/20 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ИК ГЕРМЕС. Все права защищены. Лицензия профессионального участника рынка ценных бумаг №077-12345-100000</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
