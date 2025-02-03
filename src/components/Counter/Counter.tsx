import React from 'react';

import './counter.styl';

export interface CounterProps {
  /** Отвечает за комбинацию цветовых токенов */
  primary?: true | false | 'button_counter_primary' | 'button_counter_secondary';
  /** Отвечает за исходный размер индикатора */
  size?: 24 | 20 | 16 | 12 | 8;
  /** Контент компонента */
  label: string;
  /** Отвечает за включение анимации pulse */
  pulse?: boolean;
  /** Отвечает за наличие отводки у основного фрейма */
  stroke?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

export const Counter = ({
  primary = true,
  size = 8,
  label,
  pulse = false,
  stroke = true,
  ...props
}: CounterProps) => {
    let mode: string;
    if (primary == true) {
        mode = 'counter_primary'
    } else {
        mode = 'counter_secondary'
    }
    switch (primary) {
        case true:
            mode = 'button_counter_primary';
            break;
        case false:
            mode = 'button_counter_secondary';
            break;
        case 'button_counter_primary':
            mode = 'counter_primary_custom';
            break;
        case 'button_counter_secondary':
            mode = 'counter_secondary_custom';
            break;
      }

  let strokeMode: String;
  if (stroke){
    if (size == 8) {
        strokeMode = 'counter_stroke_thin';
    } else {
        strokeMode = 'counter_stroke';
    }
  }
  const noText = (size == 8 || size == 12) ? true : false;
  const checkText = ((label: string) => {
    if (isNaN(Number(label))) {
        return label.slice(0, 3);
    } else {
        if (Number(label) > 99) {
            return '99+';
        } else {
            return label;
        }
    }
  })
  const resultText = ((noText: boolean, checkText: string) => {
    if (noText) {
        return '';
    } else {
        return checkText;
    }
  })
  const renderElement = ((pulse: boolean) => {
    if (pulse) {
        return (
            <div className='live-indicator'>
                <div
                    className={['counter', `counter_${size}`, mode, 'dot', strokeMode].join(' ')}
                    {...props}
                ></div>
                <div className='pulse one'></div>
                <div className='pulse two'></div>
            </div>
            
        );
    } else {
        return (
            <div
                className={['counter', `counter_${size}`, mode, strokeMode].join(' ')}
                {...props}
            >
                {resultText(noText, checkText(label))}
            </div>
        )
    }
  })
  return (
    renderElement(pulse)
  );
};