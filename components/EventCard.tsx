"use client";

import React from "react";
import { Button } from "./ui/button";
import { Info, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { eventURL } from "@/lib/constants";

interface EventCardProps {
  name: string;
  description: string;
  eventCategory: string;
  id: string;
}

const EventCard = ({
  name,
  description,
  eventCategory,
  id,
}: EventCardProps) => {
  const handleDeleteClick = async (id: string) => {
    console.log(id);
    try {
      const response = await axios.delete(`${eventURL}/delete-event/${id}`);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-sm h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex gap-2">
        <Button variant={"default"}>
          <Pencil size={16} />
        </Button>
        <Button
          onClick={() => {
            handleDeleteClick(id);
          }}
          variant={"destructive"}
        >
          <Trash2 size={16} />
        </Button>
        <Link href={`/events/${eventCategory}/${id}`}>
          <Button>
            <Info />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
