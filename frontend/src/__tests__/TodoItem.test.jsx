import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import App from '../App.jsx'

const baseTodo = [{             // ** TodoItem พื้นฐานสำหรับทดสอบ
  id: 1,
  title: 'Sample Todo',
  done: false,
  comments: [],
}];

describe('App', () => {
  it('renders with no comments correctly', () => {    
    // *** โค้ดสำหรับเทสที่เพิ่มเข้ามา
    render(
      <App init_todo={baseTodo} />
    );
    expect(screen.getByText('Sample Todo')).toBeInTheDocument();
  });
});