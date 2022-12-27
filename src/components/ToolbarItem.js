import React from 'react';

export default function ToolbarItem({item, filtering}) {
  return <button onClick={() => filtering(item)}>{item}</button>;
}
