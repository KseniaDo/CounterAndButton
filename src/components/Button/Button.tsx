import React from 'react';

import { Counter } from '../Counter/Counter';

import './button.styl';

export interface ButtonProps {
  /** Выбор комбинации цветовых токенов, присвоенных компоненту */
  Button_style?: 'primary' | 'secondary';
  /** Отвечает за исходный размер кнопки и значения Counter */
  Button_size?: 28 | 36 | 56;
  /** Button контент */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Отвечает за отображение фокуса */
  focused?: boolean;
  /** Отвечает за отключенное состояние компонента */
  disabled?: boolean;
  /** Отвечает за отображение иконки справа от контента */
  counter?: boolean;
}

export const Button = ({
    Button_style = 'primary',
    Button_size = 36,
  label,
  focused = false,
  disabled = false,
  counter = true,
  ...props
}: ButtonProps) => {
  const mode = Button_style == 'primary' ? 'button_primary' : 'button_secondary';
  const focus = focused ? 'button_focused' : 'button_unfocused';
  let counterSize: any = 8;
  switch (Button_size) {
    case 28:
        counterSize = 16;
        break;
    case 36:
        counterSize = 20;
        break;
    case 56:
        counterSize = 24;
        break;    
  }
  let counterPrimary: any = true;
  switch (Button_style) {
    case 'primary':
        counterPrimary = 'button_counter_primary';
        break;
    case 'secondary':
        counterPrimary = 'button_counter_secondary';
        break;
  }
  const counterArgs = {
        primary: counterPrimary,
        label: '1',
        size: counterSize,
    };

    const renderElement = ((counter: boolean) => {
        if (counter) {
            return (
                <button
                    type="button"
                    autoFocus={focused}
                    disabled={disabled}
                    className={['button', `button_${Button_size}`, mode, focus].join(' ')}
                    {...props}
                >
                    <div className='content-group'>
                        {label}
                        <Counter label={counterArgs.label!} size={counterArgs.size!} />
                    </div>                    
                    <div className='button__overlay'></div>
                </button>
            );
        } else {
            return (
                <button
                    type="button"
                    autoFocus={focused}
                    disabled={disabled}
                    className={['button', `button_${Button_size}`, mode, focus].join(' ')}
                    {...props}
                >
                    <div className='content-group'>
                        {label}
                    </div>
                    <div className='button__overlay'></div>
                </button>
            )
        }
      })
  return (
    renderElement(counter)
  );
};