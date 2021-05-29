import React from 'react'
import { Dialog } from '../Dialog';

import styles from './Guarantees.module.scss';

export const GuaranteesDialog = ({ openDialog, setOpenDialog }) => {

  const handleOnOpenDialog = () => {
    setOpenDialog(false);
  }

  return (openDialog &&
    <Dialog
      id='modal_guarantee'
      isOpen={openDialog}
      onClose={handleOnOpenDialog}
      title={'Гарантии / Соглашение'}
      modalClass={styles.dialog}
    >
      <div className={styles.dialog__content}>
        <div style={{ marginBottom: 24, }}>
          <b>Внимание:</b> просьба ознакомиться с данным соглашением пользователя перед тем, как приступать к работе
        с сайтом 4keys и его программным обеспечением. Завершенная процедура регистрации на сайте автоматически
        подтверждает ваше согласие с условиями, прописанными в этом соглашении.
        В случае, если условия этого соглашения пользователя вам не подходят, просим воздержаться от процедуры прохождения
        регистрации и использования сайта 4keys и его программного обеспечения.
        </div>

        <ol>
          <li className={styles.sub} >Определения и термины</li>

          <ol className={styles.ol}>
            <li>
              В данном соглашении пользователя, если не указано другое, термины имею такое значение:
              «Steam», «служба Steam» - Онлайновая услуга, предлагаемая корпорацией Valve, являющейся правообладателем
              объектов Инвентаря.
              «Владелец» - 4keys
              «Инвентарь» - возможность применения одного из прописанных в Кейсе объектов в полном соответствии с
              пользовательским соглашением, расположенным по электронному адресу: <a href="http://store.steampowered.com/subscriber_agreement/russian/" target="_blank">http://store.steampowered.com/subscriber_agreement/russian/</a>
              «Кейс» - объединенные, защищенные страницы Сайта, создаваемые путем регистрации Пользователя, работая с
              которыми пользователь получает доступ полностью или частично к функциям Сайта.
              Порядок доступа в Личный кабинет:
            <ul>
                <li>Нажать кнопку «Войти через STEAM» или «Вконтакте», после чего в автоматическом режиме произойдет
                перенаправление на страницу в сети Интернет по адресу: https://steamcommunity.com или https://vk.com
                </li>
                <li>Введение Пользователем логина и пароля в предназначенную для этого форму и активация кнопки «Sign
                in».
                </li>
                <li>Путем открытия Сайта, если Пользователь при предыдущем посещении не нажимал кнопку «Выход».</li>
              </ul>
            «Пользователь» - Лицо, создавшее аккаунт, выразившее согласие с настоящим Положением.
            «Сайт» - совокупность страниц, расположенная в доменной зоне 4keys и содержащая объекты
            интеллектуальной деятельности, представленные в виде: различных видео и фотоматериалов, текстового контента,
            графики и прочего, за исключением Инвентаря.
            «Соглашение» - данное соглашение пользователя.
            «Стороны» - лицо, принимающее соглашение и Владелец.
        </li>
            <li>
              Другие определения, которые могут встретиться в тексте, должны быть истолкованы исходя из законодательства
              Украины и общепринятыми нормами применения их в сети Интернет.
        </li>

            <li>
              Наименования подразделов настоящего Соглашения применяются сугубо для удобства его использования и
              практического юридического значения не несут.
        </li>
          </ol>

          <li className={styles.sub} >Заключение Соглашения</li>

          <ol className={styles.ol}>
            <li>Настоящее Соглашение содержит в себе все необходимые условия и представляет собой публичное предложение
            услуг любому совершеннолетнему дееспособному лицу. Таким образом, оно является публичной офертой согласно
            пункту 2 статьи 437 ГК Украины.
        </li>
            <li>Полным согласием с данной офертой согласно статьи 438 ГК Украины является совершение действий в следующем
            порядке:
        </li>
            <ol>
              <li>Изучение данного Соглашения;</li>
              <li>Регистрация на сайте путем перехода по ссылке «АВТОРИЗОВАТЬСЯ ЧЕРЕЗ STEAM» или «Вконтакте» и
              осуществления авторизации в открывшемся окне через уже зарегистрированный аккаунт Steam или VK, или
              путем создания нового аккаунта Steam или VK
            </li>
            </ol>
          </ol>


          <li className={styles.sub} >Предмет Соглашения</li>

          <ol className={styles.ol}>
            <li>Владелец выдает Пользователю:</li>
            <ol>
              <li>Безвозмездную (неисключительную) лицензию на применение Сайта и его программного обеспечения по их
              функциональному назначению, что предусмотрено функционалом Сайта и Личного кабинета.
            </li>
              <li>Возмездную (неисключительную) лицензию на применение Кейса по назначению, стоимость лицензии на каждую
              разновидность Кейса указана на Сайте.
            </li>
              <li>Упомянутая в пункте 3.1.1 лицензия выдается Пользователю на срок, указанный в Кейсе, на протяжении
              которого Сайт и Личный кабинет доступны Пользователю
            </li>
              <li>Упомянутая в пункте 3.1.2 лицензия выдается Пользователю в пределах определенной территории, где Кейс
              доступен для Пользователя на протяжении оговоренного срока с момента поступившей оплаты вознаграждения
              за применение определенного Кейса до момента выбора Инвентаря с помощью этого Кейса.
            </li>
            </ol>

            <li>Пользователю запрещается:</li>
            <ol>
              <li>Нейтрализовать технические границы, принятые на Сайте и в Кейсе;</li>
              <li>Изучать технологию, декомпилировать или дизассемблировать Сайт, Кейс и Личный кабинет, кроме ситуаций,
              указанных в законодательстве
            </li>
              <li>Копировать дизайнерское оформление и наполнение Сайта, Кейсов и личного кабинета</li>
              <li>Модифицировать Сайт, Кейсы и Личный кабинет любым способом;</li>
              <li>Производить действия, нацеленные на переформирование функций и методов работы Сайта, Кейсов и Личного
              кабинета;
            </li>
              <li>Передавать данные для доступа в Личный кабинет третьим лицам;</li>
              <li>Совершать вышеперечисленные действия касаемо любой части Сайта, Кейсов и Личного кабинета.</li>
              <li>Запрещается регистрировать более одной Учетной Записи.</li>
            </ol>
          </ol>

          <li className={styles.sub}>Функции Сайта, Кейса и Личного кабинета</li>

          <ol className={styles.ol}>
            <li>Пользователь с помощью Сайта получает возможность:</li>
            <ol>
              <li>Изучать состав и функции Инвентаря, который был выбран через определенный Кейс, и цену лицензии на
              применение этого Кейса;
            </li>
              <li>Оплачивать лицензию на применение Кейса и использовать Инвентарь согласно условиям, прописанным в
              Соглашении;
            </li>
              <li>Оплачивая доступ к Кейсу, Пользователь получает один из указанных в составе Кейса Инвентарей. Выбор
              Инвентаря происходит рандомно.
            </li>
            </ol>
            <li>С помощью Личного кабинета у пользователя есть возможность:</li>
            <ol>
              <li>Отправить Инвентарь в аккаунт;</li>
              <li>Действуя или бездействуя на протяжении одного часа после получения Инвентаря с помощью Кейса произвести
              отчуждение Инвентаря за бонусные баллы в объеме, прописанном в характеристиках Инвентаря в Личном
              кабинете. Баллы дают скидку при следующем взносе лицензионного вознаграждения
            </li>
            </ol>
          </ol>

          <li className={styles.sub}>Приемка Инвентаря</li>

          <ol className={styles.ol}>
            <li>После выдачи Инвентаря с помощью Кейса и когда он отразился в Личном кабинете, у Пользователя есть 1 час на
            то, чтобы отправить Инвентарь в аккаунт или обменять на бонусные баллы.
        </li>
            <li>Отправка Инвентаря в аккаунт производится, если пользователь осуществлял реальное пополнение на сайте на
            общую сумму от 50 рублей и выше, а также в случае исполнения Пользователем прописанных на Сайте и в Личном
            кабинете настроек аккаунта и Личного кабинета.
        </li>
            <li>Для отправки Инвентаря в аккаунт при условии выполнения пункта 5.2 Соглашения, в промежуток до одного часа
            после получения Инвентаря, Пользователь должен перейти по ссылке «Забрать» размещенной в Личном кабинете в
            описании самого Инвентаря.
        </li>
            <li>Пользователь может обменять Инвентарь, не отправленный в аккаунт, на бонусные баллы, количество которых
            указано в описании Инвентаря. Один балл приравнивается к одному рублю и может использоваться для оплаты
            лицензии. Сторонами согласовано, что бонусные баллы не являются денежными знаками и не могут быть возвращены
            или обменены.
        </li>
            <li>Чтобы обменять Инвентарь на бонусные баллы, Пользователь в период 1 часа после выдачи ему Инвентаря должен
            перейти по ссылке, размещенной в его описании. Отсутствие вышеуказанных действий со стороны Пользователя на
            протяжении 1 часа влечет за собой отчуждение Инвентаря, не отправленного в аккаунт.
        </li>
            <li>После обмена Инвентаря на баллы, их количество показывается в Личном кабинете.</li>
            <li>Прием отправленных вещей в системе STEAM должна быть осуществленна в течении 60 минут, в противном случае
            трейд будет автоматически отменен, также Вы не получите бонусные баллы в Личный кабинет.
        </li>
          </ol>

          <li className={styles.sub}>Вознаграждение Владельца</li>

          <ol className={styles.ol}>
            <li>За открытие доступа к Кейсу Пользователь оплачивает вознаграждение, равное стоимости лицензии, указанной в
            описании Кейса.
        </li>
            <li>Упомянутое в предыдущем пункте вознаграждение оплачивается Пользователем из заблаговременно перечисленных
            Владельцу с помощью платёжной системы, средств. Сведения о платежной системе доступны в процессе оплаты.
            Объем перечисленных финансов доступен в Личном кабинете.
        </li>
            <li>Перечисление финансов Владельцу производится в соответствии с регламентом, прописанным на определенной
            странице Сайта. Требования платежной системы, использующейся для проведения расчетов, указаны там же.
        </li>
            <li>Фактической оплатой упомянутого в пункте 6.1 Соглашения вознаграждения считается момент списания финансов с
            баланса Пользователя.
        </li>
            <li>Оплата вознаграждения производится в порядке, расписанном в данном разделе и с учетом пункта 5.6 Соглашения
            пользователя.
        </li>

          </ol>

        </ol>

      </div>
    </Dialog>)
}
