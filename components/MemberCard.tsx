import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Member } from '@/types';
import { Button } from "@/components/ui/button"
import { Linkedin, Facebook, Mail, Phone } from 'lucide-react'

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState<'right' | 'left'>('right');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      if (rect.right + 400 > windowWidth) {
        setPosition('left');
      } else {
        setPosition('right');
      }
    }
  }, [isHovered]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
    >
      <Link 
        href={`/members/${member.id}`}
        className="block transition-transform hover:scale-105"
      >
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image 
              src={member.image || "/placeholder.svg"} 
              alt={member.name} 
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
          <p className="text-gray-600 text-center">{member.role}</p>
        </div>
      </Link>
      {isHovered && (
        <div 
          className={`absolute z-50 bg-white rounded-lg shadow-xl w-96 overflow-hidden ${
            position === 'right' ? 'left-full ml-4' : 'right-full mr-4'
          } top-0`}
        >
          <div className="relative h-64 w-full">
            <Image 
              src={member.image || "/placeholder.svg"} 
              alt={member.name} 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{member.role}</p>
            <p className="text-gray-700 mb-4">{member.bio}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2 text-gray-500" />
                <span>{member.email || 'Email not available'}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-500" />
                <span>{member.phone || 'Phone not available'}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.linkedin && (
                <Button size="sm" variant="outline" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              )}
              {member.facebook && (
                <Button size="sm" variant="outline" asChild>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </a>
                </Button>
              )}
              <Button size="sm" asChild>
                <Link href={`/members/${member.id}`}>
                  View Full Profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

